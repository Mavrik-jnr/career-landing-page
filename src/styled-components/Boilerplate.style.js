import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


*,*::after,*::before{
box-sizing:border-box;
margin:0;

--gray-50: #F8FAFC;
--gray-800: #1E293B; 
--gray-900: #0f172a;
--gray-700: #334155;
--primary : #0062FF;
}
  body {
    margin: 0;
    font-family: "Inter", Helvetica, Sans-Serif;


  }
  h6{
    font-weight:600;
    font-size:clamp(16px, 5vw, 20px);
    line-height:clamp(24px, 5vw, 28px);
    
  }
  h1{
    font-weight:600;
    font-size:clamp(32px, 5vw, 72px);
    line-height:clamp(40px, 5vw, 80px);
    letter-spacing:-4%;

  }
  
  button{
    font-size:18px;
    font-weight: 600;
    line-height:22px;
    color:#F8FAFC;
  
  }
  p{
    font-size:clamp(14px, 5vw, 20px);
    line-height:1.4;
    font-weight:400px;
    line-height:20px;
  }
`;

export default GlobalStyle;
