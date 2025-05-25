import colors from "colors";

// This middleware logs the HTTP method, protocol, host, and original URL of incoming requests
const logger = (req, res, next) => {
  const methodColors = {
    GET: "green",
    POST: "blue",
    PUT: "yellow",
    DELETE: "red",
  };

  const color = methodColors[req.method] || "white"; //here we set the color based on the HTTP method

  // Log the request details in red color using the colors library. We only need to add ["colo_name"] after the string
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`[
      color
    ]
  );

  next();
};

export default logger;
