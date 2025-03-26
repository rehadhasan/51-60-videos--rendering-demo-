import Product from "@/components/Product";
import Review from "@/components/Review";
import {Suspense} from "react";

export default function ProductReviewsPage() {
    return(
        <div>
            <h1>Product Reviews</h1>
            <Suspense fallback={<p>Loading product details...</p>}>
                <Product/>
            </Suspense>
            <Suspense fallback={<p>Loading review...</p>}>
                <Review/>
            </Suspense>
        </div>
    )
}