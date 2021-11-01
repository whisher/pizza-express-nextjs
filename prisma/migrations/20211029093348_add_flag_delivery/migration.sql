-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserOrder" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "delivered" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_UserOrder" ("createdAt", "delivered", "id", "updatedAt", "userId") SELECT "createdAt", "delivered", "id", "updatedAt", "userId" FROM "UserOrder";
DROP TABLE "UserOrder";
ALTER TABLE "new_UserOrder" RENAME TO "UserOrder";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
