import React from 'react';

function StreamlitIframe() {
  return (
    <iframe
      src="http://localhost:8501/"
      title="Streamlit App"
      width="100%"
      height="800px"
      style={{ border: "none" }}
    />
  );
}

export default StreamlitIframe;