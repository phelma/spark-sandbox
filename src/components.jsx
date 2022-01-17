/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { AiFillPoundCircle } from "@uswitch/spark-icons/ai";
import { HiArrowRight } from "@uswitch/spark-icons/hi";
export const PoundCircleIcon = AiFillPoundCircle;
export const RightArrowIcon = HiArrowRight;
export const Container = (props) => (
  <div sx={{ maxWidth: 1200, px: 16 }} {...props} />
);
