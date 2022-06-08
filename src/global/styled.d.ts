import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      bg: string;
      bgPanel: string;
      colorText: string;
    };
  }
}