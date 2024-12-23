-- DropIndex
DROP INDEX `NodProduct_productId_key` ON `NodProduct`;

-- AlterTable
ALTER TABLE `NodProduct` MODIFY `productId` VARCHAR(191) NULL;
