import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
export function Footer({ brandName, brandLink, routes }) {
  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <Typography variant="small" className="font-normal text-inherit">
          © This website created by
          <a
            className="text-blue-600 hover:underline mx-1"
            target={`_blank`}
            href="https://itca.vercel.app/">
            IT City Academy
          </a>{" "}
          in {new Date().getFullYear()}
        </Typography>
      </div>
    </footer>
  );
}
Footer.defaultProps = {
  brandName: "Creative Tim",
  brandLink: "https://www.creative-tim.com",
  routes: [
    { name: "Creative Tim", path: "https://www.creative-tim.com" },
    { name: "About Us", path: "https://www.creative-tim.com/presentation" },
    { name: "Blog", path: "https://www.creative-tim.com/blog" },
    { name: "License", path: "https://www.creative-tim.com/license" },
  ],
};
Footer.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};
Footer.displayName = "/src/widgets/layout/footer.jsx";
export default Footer;
