export const fetchTags = name => (
  $.ajax({
    method: 'GET',
    url: 'api/tags',
    data: { name }
  })
);

export const fetchPopularTags = () => (
  $.ajax({
    method: 'GET',
    url: 'api/tags',
    data: { popular: 10 }
  })
)
