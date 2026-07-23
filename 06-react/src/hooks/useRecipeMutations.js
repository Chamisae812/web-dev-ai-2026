import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { addRecipe, editRecipe, deleteRecipe } from "../api/recipes.js";

/*
  - mutation : 서버에 보낼 요청 함수
  - onSuccess : mutationFn 성공 시 실행되는 콜백

  invalidataQueries : 무효화
  - querykey 캐시에 "오래된 것일 수 있음"을 표시
  - 해당 데이터를 쓰는 컴포넌트가 있으면 그 자리에 자동으로 다시 요청
*/

export const useAddRecipe = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ name, image, description, ingredients, directions }) =>
      addRecipe(name, image, description, ingredients, directions),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["recipes"] }),
  });
};

export const useEditRecipe = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, name, image, description, ingredients, directions }) =>
      editRecipe(id, name, image, description, ingredients, directions),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      queryClient.invalidateQueries({ queryKey: ["recipe"] });
    },
  });
};

export const useDeleteRecipe = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (id) => deleteRecipe(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      navigate("/");
    },
  });
};
