import { checkBreakpoints, runSplit } from '../utilities';

export const textScrub = function (gsapContext) {
  //animation ID
  const ANIMATION_ID = 'textscrub';
  //elements
  const ITEM = '[data-ix-textscrub="item"]';
  //option for active class and default class
  const HOVER_ACTIVE_CLASS = 'data-ix-textscrub-class';
  const ACTIVE_CLASS = 'is-active';
  // get all links without a no-hover attribute and any other elements with a hover attribute into an array
  const items = gsap.utils.toArray(ITEM);
  items.forEach((item) => {
    if (!item) return;
    //check breakpoints and quit function if set on specific breakpoints
    let runOnBreakpoint = checkBreakpoints(item, ANIMATION_ID, gsapContext);
    if (runOnBreakpoint === false) return;
    //add event listener to item
    const splitText = runSplit(item, 'lines');
    if (!splitText) return;
  });
};
/*
CSS
<style>
.line {
  position: relative;
}
.line-mask {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #bf4141;
  opacity: 0.65;
  height: 100%;
  width: 100%;
  z-index: 2;
}
</style>
*/
