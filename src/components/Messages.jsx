import React from "react";
import PropTypes from "prop-types";

export default function Messages({ messages }) {
  return (
    <div className="message-container">
      <h2>Messages</h2>
      <div class="timeline">
        {messages
          .sort((a, b) => b.timestamp - a.timestamp)
          .map((message, i) => (
            <div
              key={i}
              className={`container ${i % 2 == 0 ? "right" : "left"}`}
            >
              <div className="date">
                {new Date(+message.timestamp).toLocaleString()}
              </div>
              <i className="icon fa fa-home"></i>
              {message.premium ? (
                <div class="price-container">
                  <div class="price">
                    <span class="label">premium</span>
                  </div>
                </div>
              ) : null}
              <div className="content">
                <h2>{message.sender}</h2>
                <p>{message.text}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

Messages.propTypes = {
  messages: PropTypes.array,
};
