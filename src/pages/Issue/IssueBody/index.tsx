import { IssueBodyContainer } from "./styles";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface IssueBodyProps {
  body: string;
}

export function IssueBody({ body }: IssueBodyProps) {
  return (
    <IssueBodyContainer>
      <Markdown
        rehypePlugins={[remarkGfm]}
        children={body}
        components={{
          input: ({ node, ...props }) => {
            {
              () => console.log(node);
            }
            if (node?.type === "checkbox") {
              return (
                <input
                  type="checkbox"
                  checked={node?.checked}
                  readOnly
                  {...props}
                />
              );
            }
            return <input {...props} />;
          },
        }}
      />
    </IssueBodyContainer>
  );
}
