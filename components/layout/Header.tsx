/*!
 * @author Mohamed Muntasir
 * @link https://github.com/symfagency
 */

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import config from "../../config";
import { useIsMounted, useScrollDirection } from "../../hooks";
import { Logo } from "..";

const Header = () => {
	const router = useRouter();
	const [isScrolledToTop, setIsScrolledToTop] = useState(true);
	const isMounted = useIsMounted(
		router.pathname === "/" ? config.delays.reveal / 2 : config.delays.header
	);
	const scrollDirection = useScrollDirection();

	useEffect(() => {
		const listener = function (this: Window) {
			setIsScrolledToTop(this.scrollY < 50);
		};

		window.addEventListener("scroll", listener);

		return () => window.removeEventListener("scroll", listener);
	});

	return (
		<header
			className={`fixed top-0 left-0 z-20 h-16 w-full min-w-[280px] bg-transparent backdrop-blur transition ${
				isScrolledToTop ? "shadow-none" : "shadow-md shadow-secondary/10"
			}`}
			style={{
				transform:
					!isScrolledToTop && scrollDirection === "DOWN"
						? "translateY(-100%)"
						: "",
			}}>
			<nav className="flex h-full items-center justify-between gap-4 py-3 px-5 md:px-14">
				<TransitionGroup component={null}>
					{isMounted && (
						<CSSTransition
							classNames="fade-down"
							timeout={config.delays.reveal}>
							<Link href="/">
								<a>
									<span className="sr-only">home page link</span>

									<Logo className="h-24 w-24" />
								</a>
							</Link>
						</CSSTransition>
					)}
				</TransitionGroup>

				<ul className="flex items-center">
					<TransitionGroup component={null}>
						{config.navLinks.map(
							({ Icon, name, url }, i) =>
								isMounted && (
									<CSSTransition
										classNames="fade-down"
										key={i}
										timeout={config.delays.reveal * config.navLinks.length}>
										<li
											className="group"
											key={name}
											style={{
												transitionDelay: `${(i * config.delays.reveal) / 2}ms`,
											}}>
											<Link href={url}>
												<a className="relative flex items-center gap-2 font-bold capitalize transition after:absolute after:left-0 after:-bottom-2 after:h-[0.1rem] after:w-0 after:bg-tertiary after:transition-all group-hover:text-secondary/60 group-hover:after:w-full">
													<Icon className="h-5 w-5" />
													{name}
												</a>
											</Link>
										</li>
									</CSSTransition>
								)
						)}
					</TransitionGroup>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
