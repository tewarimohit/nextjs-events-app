// only for requests

function handler(res, req) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;
  }
}

export default handler;
