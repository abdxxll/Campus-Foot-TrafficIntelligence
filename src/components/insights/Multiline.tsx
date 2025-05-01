import React from "react";

export const Multiline = ({ text }: { text: string }) => (
  <>
    {text.split('\n').map((line, i) =>
      line.trim() ? (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ) : (
        <br key={i} />
      )
    )}
  </>
); 