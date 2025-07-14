import tailwind from "tailwindcss"
import config from "./tailwind.config"
export default {
	plugins: [tailwind(config),autoprefixer]
};
