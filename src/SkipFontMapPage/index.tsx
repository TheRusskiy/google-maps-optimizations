import { useEffect } from "react";
import SomeMap from "../SomeMap";

const usePreventGoogleFontLoad = () => {
  useEffect(() => {
    const head = document.getElementsByTagName("head")[0] as HTMLHeadElement;

    // Save the original insertBefore function
    const insertBefore = head.insertBefore;

    // Replace insertBefore with a function that's going
    // to see what's inserted and skip if it's the designated font
    head.insertBefore = function insertBeforeNew<T extends Node>(
      newElement: T,
      referenceElement: Node
    ): T {
      if (
        (newElement as any).href &&
        (newElement as any).href.indexOf(
          "//fonts.googleapis.com/css?family=Roboto"
        ) > -1
      ) {
        // eslint-disable-next-line no-console
        console.info("Font loading is skipped");
        return newElement;
      }

      insertBefore.call(head, newElement, referenceElement);
      return newElement;
    };
    return () => {
      // restore original
      head.insertBefore = insertBefore;
    };
  }, []);
};

export default function SkipFontMapPage() {
  usePreventGoogleFontLoad();
  return (
    <div>
      <SomeMap />
    </div>
  );
}
