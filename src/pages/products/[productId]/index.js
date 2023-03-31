import { useRouter } from "next/router";
export default function index() {
  const router=useRouter();
  const productId=router.query.productId;
    return (
        <div>
          This is product number  {productId}
        </div>
    );
}
