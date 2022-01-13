import { useRouter } from "next/router";
function NewId() {
  const router = useRouter();
  const query = router.query.newsId;
  return <h1>NewId {query}</h1>;
}
export default NewId;
