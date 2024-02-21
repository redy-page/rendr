import { SVGAttributes } from "@/lib/types";
import {
  SunIcon,
  MoonIcon,
  AvatarIcon,
  ImageIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

export const Icons = {
  sun: SunIcon,
  moon: MoonIcon,
  user: AvatarIcon,
  image: ImageIcon,
  envelope: EnvelopeClosedIcon,
  logo: ({ ...props }: SVGAttributes) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="redy.page"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 129.27920378810893 60"
      {...props}
    >
      <g
        id="0f6e2590-122a-4838-b35f-7b702aa5ee36"
        fill="#FF3131"
        transform="matrix(4.1987401088830385,0,0,4.1987401088830385,-5.290411014816243,-5.878235694702617)"
      >
        <path d="M5.01 4.59Q5.75 4.59 6.17 4.82Q6.59 5.04 6.59 5.38L6.59 5.38Q6.59 5.47 6.58 5.52L6.58 5.52Q6.45 5.96 6.02 5.96L6.02 5.96Q5.95 5.96 5.81 5.94L5.81 5.94Q5.25 5.84 4.90 5.84L4.90 5.84Q3.89 5.84 3.28 6.30Q2.66 6.76 2.66 7.55L2.66 7.55L2.66 11.63Q2.66 11.97 2.48 12.15Q2.31 12.33 1.96 12.33L1.96 12.33Q1.62 12.33 1.44 12.16Q1.26 11.98 1.26 11.63L1.26 11.63L1.26 5.38Q1.26 5.04 1.44 4.86Q1.62 4.68 1.96 4.68L1.96 4.68Q2.66 4.68 2.66 5.38L2.66 5.38L2.66 5.64Q3.08 5.15 3.70 4.87Q4.31 4.59 5.01 4.59L5.01 4.59ZM14.38 8.39Q14.38 8.65 14.20 8.83Q14.01 9.00 13.73 9.00L13.73 9.00L8.41 9.00Q8.57 9.98 9.30 10.58Q10.04 11.19 11.10 11.19L11.10 11.19Q11.52 11.19 11.98 11.03Q12.43 10.88 12.73 10.65L12.73 10.65Q12.92 10.50 13.19 10.50L13.19 10.50Q13.45 10.50 13.61 10.64L13.61 10.64Q13.86 10.85 13.86 11.12L13.86 11.12Q13.86 11.37 13.64 11.54L13.64 11.54Q13.16 11.91 12.45 12.15Q11.75 12.39 11.10 12.39L11.10 12.39Q9.95 12.39 9.04 11.89Q8.13 11.40 7.62 10.51Q7.11 9.63 7.11 8.51L7.11 8.51Q7.11 7.39 7.59 6.50Q8.08 5.61 8.94 5.12Q9.80 4.62 10.89 4.62L10.89 4.62Q11.97 4.62 12.75 5.10Q13.54 5.57 13.96 6.43Q14.38 7.28 14.38 8.39L14.38 8.39ZM10.89 5.82Q9.87 5.82 9.23 6.38Q8.60 6.94 8.43 7.88L8.43 7.88L13.09 7.88Q12.96 6.94 12.39 6.38Q11.82 5.82 10.89 5.82L10.89 5.82ZM22.53 1.40Q22.85 1.40 23.04 1.60Q23.24 1.79 23.24 2.11L23.24 2.11L23.24 8.50Q23.24 9.59 22.73 10.48Q22.22 11.37 21.34 11.88Q20.47 12.39 19.39 12.39L19.39 12.39Q18.31 12.39 17.42 11.88Q16.53 11.37 16.03 10.48Q15.53 9.59 15.53 8.50L15.53 8.50Q15.53 7.41 16.00 6.52Q16.46 5.63 17.28 5.12Q18.10 4.62 19.11 4.62L19.11 4.62Q19.92 4.62 20.62 4.96Q21.32 5.29 21.81 5.89L21.81 5.89L21.81 2.11Q21.81 1.79 22.02 1.60Q22.22 1.40 22.53 1.40L22.53 1.40ZM19.39 11.13Q20.09 11.13 20.66 10.79Q21.22 10.44 21.55 9.84Q21.87 9.24 21.87 8.50L21.87 8.50Q21.87 7.76 21.55 7.16Q21.22 6.57 20.66 6.22Q20.09 5.88 19.39 5.88L19.39 5.88Q18.69 5.88 18.12 6.22Q17.56 6.57 17.23 7.16Q16.90 7.76 16.90 8.50L16.90 8.50Q16.90 9.24 17.23 9.84Q17.56 10.44 18.12 10.79Q18.69 11.13 19.39 11.13L19.39 11.13ZM31.61 4.75Q32.05 4.91 32.05 5.29L32.05 5.29Q32.05 5.43 31.96 5.63L31.96 5.63L27.68 15.26Q27.51 15.69 27.13 15.69L27.13 15.69Q26.99 15.69 26.80 15.61L26.80 15.61Q26.38 15.43 26.38 15.06L26.38 15.06Q26.38 14.90 26.46 14.73L26.46 14.73L27.86 11.58L24.71 5.60Q24.64 5.47 24.64 5.31L24.64 5.31Q24.64 5.12 24.75 4.97Q24.86 4.82 25.05 4.73L25.05 4.73Q25.17 4.68 25.33 4.68L25.33 4.68Q25.72 4.68 25.91 5.07L25.91 5.07L28.48 10.16L30.73 5.08Q30.91 4.68 31.28 4.68L31.28 4.68Q31.46 4.68 31.61 4.75L31.61 4.75Z"></path>
      </g>
    </svg>
  ),
  logoWithSymbol: ({ ...props }: SVGAttributes) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232 107" {...props}>
      <g
        data-v-423bf9ae=""
        id="af84d1df-26aa-4153-a4d1-c82ace1dd4e3"
        fill="#FF3131"
        transform="matrix(4.1987401088830385,0,0,4.1987401088830385,96.96596715901188,17.27389633959914)"
      >
        <path d="M5.01 4.59Q5.75 4.59 6.17 4.82Q6.59 5.04 6.59 5.38L6.59 5.38Q6.59 5.47 6.58 5.52L6.58 5.52Q6.45 5.96 6.02 5.96L6.02 5.96Q5.95 5.96 5.81 5.94L5.81 5.94Q5.25 5.84 4.90 5.84L4.90 5.84Q3.89 5.84 3.28 6.30Q2.66 6.76 2.66 7.55L2.66 7.55L2.66 11.63Q2.66 11.97 2.48 12.15Q2.31 12.33 1.96 12.33L1.96 12.33Q1.62 12.33 1.44 12.16Q1.26 11.98 1.26 11.63L1.26 11.63L1.26 5.38Q1.26 5.04 1.44 4.86Q1.62 4.68 1.96 4.68L1.96 4.68Q2.66 4.68 2.66 5.38L2.66 5.38L2.66 5.64Q3.08 5.15 3.70 4.87Q4.31 4.59 5.01 4.59L5.01 4.59ZM14.38 8.39Q14.38 8.65 14.20 8.83Q14.01 9.00 13.73 9.00L13.73 9.00L8.41 9.00Q8.57 9.98 9.30 10.58Q10.04 11.19 11.10 11.19L11.10 11.19Q11.52 11.19 11.98 11.03Q12.43 10.88 12.73 10.65L12.73 10.65Q12.92 10.50 13.19 10.50L13.19 10.50Q13.45 10.50 13.61 10.64L13.61 10.64Q13.86 10.85 13.86 11.12L13.86 11.12Q13.86 11.37 13.64 11.54L13.64 11.54Q13.16 11.91 12.45 12.15Q11.75 12.39 11.10 12.39L11.10 12.39Q9.95 12.39 9.04 11.89Q8.13 11.40 7.62 10.51Q7.11 9.63 7.11 8.51L7.11 8.51Q7.11 7.39 7.59 6.50Q8.08 5.61 8.94 5.12Q9.80 4.62 10.89 4.62L10.89 4.62Q11.97 4.62 12.75 5.10Q13.54 5.57 13.96 6.43Q14.38 7.28 14.38 8.39L14.38 8.39ZM10.89 5.82Q9.87 5.82 9.23 6.38Q8.60 6.94 8.43 7.88L8.43 7.88L13.09 7.88Q12.96 6.94 12.39 6.38Q11.82 5.82 10.89 5.82L10.89 5.82ZM22.53 1.40Q22.85 1.40 23.04 1.60Q23.24 1.79 23.24 2.11L23.24 2.11L23.24 8.50Q23.24 9.59 22.73 10.48Q22.22 11.37 21.34 11.88Q20.47 12.39 19.39 12.39L19.39 12.39Q18.31 12.39 17.42 11.88Q16.53 11.37 16.03 10.48Q15.53 9.59 15.53 8.50L15.53 8.50Q15.53 7.41 16.00 6.52Q16.46 5.63 17.28 5.12Q18.10 4.62 19.11 4.62L19.11 4.62Q19.92 4.62 20.62 4.96Q21.32 5.29 21.81 5.89L21.81 5.89L21.81 2.11Q21.81 1.79 22.02 1.60Q22.22 1.40 22.53 1.40L22.53 1.40ZM19.39 11.13Q20.09 11.13 20.66 10.79Q21.22 10.44 21.55 9.84Q21.87 9.24 21.87 8.50L21.87 8.50Q21.87 7.76 21.55 7.16Q21.22 6.57 20.66 6.22Q20.09 5.88 19.39 5.88L19.39 5.88Q18.69 5.88 18.12 6.22Q17.56 6.57 17.23 7.16Q16.90 7.76 16.90 8.50L16.90 8.50Q16.90 9.24 17.23 9.84Q17.56 10.44 18.12 10.79Q18.69 11.13 19.39 11.13L19.39 11.13ZM31.61 4.75Q32.05 4.91 32.05 5.29L32.05 5.29Q32.05 5.43 31.96 5.63L31.96 5.63L27.68 15.26Q27.51 15.69 27.13 15.69L27.13 15.69Q26.99 15.69 26.80 15.61L26.80 15.61Q26.38 15.43 26.38 15.06L26.38 15.06Q26.38 14.90 26.46 14.73L26.46 14.73L27.86 11.58L24.71 5.60Q24.64 5.47 24.64 5.31L24.64 5.31Q24.64 5.12 24.75 4.97Q24.86 4.82 25.05 4.73L25.05 4.73Q25.17 4.68 25.33 4.68L25.33 4.68Q25.72 4.68 25.91 5.07L25.91 5.07L28.48 10.16L30.73 5.08Q30.91 4.68 31.28 4.68L31.28 4.68Q31.46 4.68 31.61 4.75L31.61 4.75Z"></path>
      </g>
      <g
        data-v-423bf9ae=""
        id="4acfcb67-5396-4e97-83b6-6d91cab44550"
        transform="matrix(1.0868111504448785,0,0,1.0868111504448785,-13.255261890115804,-0.23894260335429607)"
        stroke="none"
        fill="#FF3131"
      >
        <g clipRule="evenodd">
          <path d="M12.983 10.59l17.018 88.223-5.872-59.049 29.021-1.892-.054-9.883L64.549 1 53.622 18.977z"></path>
          <path d="M59.389 54.548l5.16-53.541-8.74 39.716-19.612 1.045 1.57 20.462-7.766 36.583 12.057-39.899z"></path>
          <path d="M62.8 67.182l.549-10.453-15.979 3.755-.032 11.797-17.337 26.532 21.68-27.616zM65.711 62.394l14.841-4.731 1.509-12.532-15.899 2.095zM72.07 44.502l10.988-1.417 1.581-10.278-8.079-.373L64.549 1l8.43 30.967z"></path>
          <path d="M87.413 31.294l1.256-9.506-9.544-2.694L64.549 1l14.483 22.437-.422 7z"></path>
        </g>
      </g>
    </svg>
  ),
};
