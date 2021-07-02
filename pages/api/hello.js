export default function handler(req, res) {
  let name = 'World'
  if (req.query.name) {
      name = req.query.name
  }
  res.status(200).json({ text: 'Hello '+name })
}