import { useQuery } from "@tanstack/react-query";
import { getBars } from "../api/bars.js";

export const useBars = (keyword) => {
  return useQuery({
    queryKey: ["bars", keyword],
    queryFn: () => getBars(keyword),
  });
};


/* 
  TanStack Query
  - useQuery : 조회(한 번)
  - useInfiniteQuery : 조회(페이지를 불러올 때 마다)
  - useMutation : 서버 데이터를 바꿀 때(추가/수정/삭제)

  useQuery, useInfiniteQuery 공통 옵션
  -querykey : 캐시 이름표
  -queryFn : 데이터를 가져오는 함수, 리턴값이 데이터
*/