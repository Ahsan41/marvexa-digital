declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.scss";

declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
