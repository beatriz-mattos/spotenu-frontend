import styled from 'styled-components';

export const Logo = styled.img`
  max-width: 168px;

  // @media (max-width: 800px){
  // margin-top:8px;
  // max-width: 105px;
  // }
`;

export const HeaderContainer = styled.nav `
  width: 100%;
  height: 94px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;
  background: var(--black);
  border-bottom: 2px solid var(--primary);

  // body {
  //   --bodyPaddingTop: 94px;
  //   padding-top: var(--bodyPaddingTop);
  // }

  // @media (max-width: 800px) {
    
  //     height: 40px;
  //     justify-content: center;
    
  //   body {
  //     --bodyPaddingTop: 40px;
  //     padding-top: var(--bodyPaddingTop);
  //   }
  // }
`;

// export const Menu = styled.ul`
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
//   overflow: hidden;
//   background-color: #333;

//   // display: flex;
//   // flex-direction: row;
//   // list-style-type: none;
//   // padding: 10px;
//   // border 1px solid var(--primary);
//   // float:left;

//   // @media (max-width: 800px){
//   //   margin-top: 10px;
//   //   max-width: 105px;
//   // }
// `

// export const GoToSignup = styled.li`
//   color: var(--primary);
//   //list-style-type: none;
//   //padding-right: 20px;

//   position:relative;
//   float:left;
//   border-right:1px solid #c0c0c0;
  
//   :hover{
//     cursor: pointer;
//     float: left;
//     //border 1px solid var(--primary);
//   }
// `

// export const GoToLogin = styled.li`
//   color: var(--primary);
//   //list-style-type: none;

//   position:relative;
//   float:left;
//   border-right:1px solid #c0c0c0;
  
//   :hover{
//     cursor: pointer;
//     float: left;
//     //border 1px solid var(--primary);
//   }
//`