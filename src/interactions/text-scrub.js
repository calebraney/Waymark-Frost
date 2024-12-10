import { checkBreakpoints, runSplit } from '../utilities';

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
  background-color: var(--theme--background-1, #000);
  opacity: 0.65;
  height: 100%;
  width: 100%;
  z-index: 2;
}
</style>
*/

export const textScrub = function (gsapContext) {
  //animation ID
  const ANIMATION_ID = 'textscrub';
  //elements
  const ITEM = '[data-ix-textscrub="item"]';
  //options
  const LINE_CLASS = 'line-mask';
  //element selector
  const items = gsap.utils.toArray(ITEM);
  items.forEach((item) => {
    if (!item) return;
    //check breakpoints and quit function if set on specific breakpoints
    let runOnBreakpoint = checkBreakpoints(item, ANIMATION_ID, gsapContext);
    if (runOnBreakpoint === false) return;
    let splitText;
    //animation functoin
    function createAnimation() {
      //split the text
      const splitText = runSplit(item, 'lines');
      if (!splitText) return;
      //for each line of text
      splitText.lines.forEach((line) => {
        // create a new div element
        const lineMask = document.createElement('div');
        //give it a class
        lineMask.classList.add(LINE_CLASS);
        // add the new div to a parent
        line.appendChild(lineMask);

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: line,
            start: 'top 70%',
            end: 'bottom 70%',
            scrub: 1.5,
          },
        });
        tl.fromTo(
          lineMask,
          {
            width: '100%',
          },
          {
            width: '0%',
            ease: 'power1.out',
            duration: 1,
          }
        );
      });

      return splitText;
    }
    splitText = createAnimation();

    //function to reset the animation
    const resentAnimation = function () {
      splitText.revert();
      splitText = createAnimation();
    };

    // Update on window resize
    //force page to reload on resize
    let windowWidth = window.innerWidth;
    window.addEventListener('resize', function () {
      if (window.innerWidth !== windowWidth) {
        windowWidth = window.innerWidth;
        resentAnimation();
      }
    });
  });
};
