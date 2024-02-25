FROM node:lts-alpine as deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

FROM node:lts-alpine as next_builder
ARG NEXT_PUBLIC_API_URL
ARG NEXT_INTERNAL_API_URL
ARG NEXT_PUBLIC_FILES
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_PUBLIC_API_URL ${NEXT_PUBLIC_API_URL}
ENV NEXT_INTERNAL_API_URL ${NEXT_INTERNAL_API_URL}
ENV NEXT_PUBLIC_FILES ${NEXT_PUBLIC_FILES}
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

FROM node:lts-alpine as next_runner
ARG RENDR_PORT
ARG NEXT_PUBLIC_API_URL
ARG NEXT_INTERNAL_API_URL

WORKDIR /app

ENV NODE_ENV production
ENV PORT ${RENDR_PORT}
ENV NEXT_PUBLIC_API_URL ${NEXT_PUBLIC_API_URL}
ENV NEXT_INTERNAL_API_URL ${NEXT_INTERNAL_API_URL}

COPY --from=next_builder /app/.next/standalone ./
COPY --from=next_builder /app/.next/static ./.next/static
COPY --from=next_builder /app/next.config.mjs ./
COPY --from=next_builder /app/package.json ./package.json


EXPOSE ${RENDR_PORT}
ENTRYPOINT [ "node", "server.js"]