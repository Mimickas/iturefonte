import { gsap } from "../lib/gsap/gsap.mjs";
import { ScrollTrigger } from "../lib/gsap/ScrollTrigger.mjs";
import { Observer } from "../lib/gsap/Observer.mjs";
import { Draggable } from "../lib/gsap/Draggable.mjs";

gsap.registerPlugin(ScrollTrigger, Observer, Draggable);

window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;
window.Observer = Observer;
window.Draggable = Draggable;