export default function OutputPreview({ doc, height = 320 }) {
  return <iframe className="output-frame" title="Code output preview" sandbox="allow-scripts allow-modals" srcDoc={doc} style={{ height }} />
}
