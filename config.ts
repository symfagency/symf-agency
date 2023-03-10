/*!
 * @author Mohamed Muntasir
 * @link https://github.com/symfagency
 */

import { VscMail } from "react-icons/vsc";

const config = {
	email: "meetings.symfagency@gmail.com",
	navLinks: [
		{
			Icon: VscMail,
			name: "contact",
			url: "/#contact",
		},
	],
	delays: {
		loader: 2000,
		reveal: 200,
		aside: 500,
		header: 700,
	},
	srConfig: (delay = 200) => ({
		delay,
		distance: "1.25rem",
		duration: 500,
		easing: "cubic-bezier(.64,.45,.35,1)",
		opacity: 0,
		origin: "bottom",
		rotate: { x: 0, y: 0, z: 0 },
		scale: 1,
		cleanup: false,
		container: document.documentElement,
		desktop: true,
		mobile: true,
		reset: false,
		useDelay: "always",
		viewFactor: 0.25,
		viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
	}),
};

export default config;
