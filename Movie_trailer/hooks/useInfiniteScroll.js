//useInfiniteScroll.js
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useInfiniteScroll = (isLoading, isFetching, loadMore) => {
	const { ref, inView } = useInView({
		threshold: 1,
		rootMargin: "0px",
		triggerOnce: false,
	});

	useEffect(() => {
		if (inView && !isLoading && !isFetching) {
			loadMore();
		}
	}, [inView, isLoading, isFetching, loadMore]);

	return { ref };
};

export default useInfiniteScroll;
