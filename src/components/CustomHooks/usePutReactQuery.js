const usePutReactQuery = (id) => {
    const queryClient = useQueryClient()
  
    return useMutation({
      mutationFn: () =>
        axios
          .put(`${process.env.REACT_APP_DEVELOPMENT_URL}/addProducts/${id}`, {products})
          .then((response) =>console.log( response.data)),
      // 💡 response of the mutation is passed to onSuccess
      onSuccess: (newPost) => {
        // ✅ update detail view directly
        queryClient.setQueryData( newPost)
      },
    })
  }
  export default usePutReactQuery