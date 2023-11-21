-- DropForeignKey
ALTER TABLE "CollectionMovie" DROP CONSTRAINT "CollectionMovie_movieId_fkey";

-- AddForeignKey
ALTER TABLE "CollectionMovie" ADD CONSTRAINT "CollectionMovie_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
