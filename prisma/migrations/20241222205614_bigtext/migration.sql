-- AlterTable
ALTER TABLE `AbisisMarketingField` MODIFY `content` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `AbisisProduct` MODIFY `productCategory` LONGTEXT NOT NULL,
    MODIFY `description` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `NodProduct` MODIFY `title` LONGTEXT NOT NULL,
    MODIFY `description` LONGTEXT NULL,
    MODIFY `fullDescription` LONGTEXT NULL;
