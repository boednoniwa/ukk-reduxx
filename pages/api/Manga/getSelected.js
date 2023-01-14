import prisma from "../prisma";

export default async function getSelected(req, res) {
  const { id } = req.query;
  const selectedManga = await prisma.manga.findUnique({
    include: {
      genres: true,
    },
    where: {
      id: id,
    },
  });
  return selectedManga;
}
