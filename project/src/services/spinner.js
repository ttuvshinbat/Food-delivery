import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
export const spinner = async () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      />

      <ClipLoader color={color} loading={loading} css={override} size={150} />
    </div>
  );
};
export const spinnerService = {
  spinner,
};
