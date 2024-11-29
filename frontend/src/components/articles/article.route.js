router.get("/art/articlepaginate", async (req, res) => {
  const filtre = req.query.filtre || "";
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 5;
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  const articles = await Article.find(
    {
      designation: { $regex: filtre, $options: "i" },
    },
    null,
    { sort: { id: -1 } }
  )
    .populate("scategorieID")
    .exec();

  const paginateProducts = articles.slice(startIndex, endIndex);
  const totalPages = Math.ceil(articles.length / pageSize);

  res.json({ articles: paginateProducts, totalPages });
});
