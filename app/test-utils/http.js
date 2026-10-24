function startTestServer(app) {
  return new Promise((resolve, reject) => {
    const server = app.listen(0, "127.0.0.1", () => {
      const { port } = server.address();

      resolve({
        server,
        baseUrl: `http://127.0.0.1:${port}`,
      });
    });

    server.on("error", reject);
  });
}

module.exports = { startTestServer };
