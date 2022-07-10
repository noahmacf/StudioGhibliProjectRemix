import { useParams } from "@remix-run/react";

export default function DynamicChild() {
    const {someID} = useParams();
    return <div>I am dynamic {someID} </div>
}