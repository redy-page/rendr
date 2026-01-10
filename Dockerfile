FROM node:lts-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Enable pnpm via corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM node:lts-alpine AS next_builder
ARG NEXT_PUBLIC_API_URL
ARG NEXT_INTERNAL_API_URL
ARG NEXT_PUBLIC_FILES

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ENV NEXT_INTERNAL_API_URL=${NEXT_INTERNAL_API_URL}
ENV NEXT_PUBLIC_FILES=${NEXT_PUBLIC_FILES}
ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm run build

FROM node:lts-alpine AS next_runner
ARG RENDR_PORT
ARG NEXT_PUBLIC_API_URL
ARG NEXT_INTERNAL_API_URL

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=${RENDR_PORT}
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ENV NEXT_INTERNAL_API_URL=${NEXT_INTERNAL_API_URL}

COPY --from=next_builder /app/.next/standalone ./
COPY --from=next_builder /app/.next/static ./.next/static
COPY --from=next_builder /app/next.config.mjs ./
COPY --from=next_builder /app/package.json ./package.json

EXPOSE ${RENDR_PORT}
ENTRYPOINT ["node", "server.js"]
