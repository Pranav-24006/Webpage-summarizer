import { summaryBox } from '../styles';
import { marked } from "marked";
import DOMPurify from "dompurify";

export default function SummaryBox({ summary }) {
  return (
    <div style={summaryBox}>
      <h3>Summary</h3>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(summary || "Your summary will appear here")) }} />
    </div>
  );
}
