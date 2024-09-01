import templateOneImg from "../assets/resume 1.jpg";
import templateTwoImg from "../assets/resume 2.jpg";
import templateThreeImg from "../assets/resume 3.jpg";
import templateFourImg from "../assets/resume 4.jpg"
import { colors } from "../utils/colors.js"

// storing the data of template 

export const templates = [
  {
    id: 1,
    template_name: "Template One",
    template_img: templateOneImg,
    dynamicStyle: {
      backgroundColor: colors.gray200,
      color: colors.gray900
    }
  },
  {
    id: 2,
    template_name: "Template Two",
    template_img: templateTwoImg,
    dynamicStyle: {
      backgroundColor: colors.pink500,
      color: colors.gray900,
      titleColor: colors.gray950,
      headingColor: colors.pink500,
      dividerColor: colors.pink500
    }
  },
  {
    id: 3,
    template_name: "Template Three",
    template_img: templateThreeImg,
    dynamicStyle: {
      backgroundColor: colors.blue700,
      color: colors.gray200,
      titleColor: colors.gray200,
      headingColor: colors.blue700,
      dividerColor: colors.blue700
    }
  },
  {
    id: 4,
    template_name: "Template Four",
    template_img: templateFourImg,
    dynamicStyle: {
      backgroundColor: colors.gray700,
      color: colors.blue200,
      titleColor: colors.white200,
      headingColor: colors.gray700,
      dividerColor: colors.gray700
    }
  },
];