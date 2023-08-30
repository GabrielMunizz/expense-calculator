import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string,
      loginBtn_color: string,
      text_details: string,
      main_text_color: string,
      footer_background: string,
      photo_background: string,
    }
  }
}
