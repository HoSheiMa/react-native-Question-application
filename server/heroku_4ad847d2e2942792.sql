/*
 Navicat MySQL Data Transfer

 Source Server         : Sørpefull
 Source Server Type    : MySQL
 Source Server Version : 50650
 Source Host           : us-cdbr-east-06.cleardb.net:3306
 Source Schema         : heroku_4ad847d2e294279

 Target Server Type    : MySQL
 Target Server Version : 50650
 File Encoding         : 65001

 Date: 01/12/2022 00:56:07
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `body` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `category` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 154 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (3, 'q1', '<p>testest1</p>', 'forpefoll');
INSERT INTO `article` VALUES (4, 'q2', '<p>testest2</p>', 'forpefoll');
INSERT INTO `article` VALUES (5, 'q1', '<p>testest1</p>', 'sorpefoll_v2');
INSERT INTO `article` VALUES (6, 'q2', '<p>testest2</p>', 'sorpefoll_v2');
INSERT INTO `article` VALUES (14, 'Test if this work', '<p>will this also wok</p>', 'Bli_kjent');
INSERT INTO `article` VALUES (34, 'SpÃ¸rsmÃ¥l', '<p>Ta i mot 3 slurker hvis du noen gang har vÃ¦rt buret inne</p>', 'Bli_kjent');
INSERT INTO `article` VALUES (44, 'Tommel opp eller ned', '<p>Tommel opp: aldri spise sjokolade igjen, eller tommel ned: byttet fornavn?</p><p>Alle stemmer samtidig, mindretallet mÃ¥ ta 5 slurker hver!</p>', 'Bli_kjent');
INSERT INTO `article` VALUES (54, '{name}!', '<p>NÃ¥r har {name} bursdag? Du kan dele ut 4 slurker om du kan svaret, ellers mÃ¥ du ta dem selv!</p>', 'Bli_kjent');
INSERT INTO `article` VALUES (64, '{name}!', '<p>Hvis du debuterte seksuelt etter du ble 16 Ã¥r, fÃ¥r du 2 slurker!</p>', 'Bli_kjent');
INSERT INTO `article` VALUES (74, 'Regel!', '<p>Det er kun tillatt Ã¥ drikke med venstre arm! Uhell straffes med 2 slurker. Tar du noen i drikke med feil arm, kan du dele ut 2 slurker!</p>', 'Bli_kjent');
INSERT INTO `article` VALUES (84, 'Regel!', '<p>Mobilforbud! Neste som ser pÃ¥ mobilen fÃ¥r 5 slurker!</p>', 'Bli_kjent');
INSERT INTO `article` VALUES (94, 'Spill!', '<p>Hver av deltakerne fÃ¥r i tur og orden dele ut like mange slurker som vedkommende har for, mellom og etternavn. {navn} starter</p>', 'Bli_kjent');
INSERT INTO `article` VALUES (104, '{name}', '<p>Du mÃ¥ sÃ¸ke jobb, men har kun 2 valg: Butler for Cristian Brennhovd eller bilvasker? Du kan dele ut 4 slurker for Ã¦rligheten!</p><p>&nbsp;</p>', 'Bli_kjent');

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `link` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 'Bli_kjent', 'https://unboxaboxv3.s3.amazonaws.com/mobileapp/icon/NoPath+%E2%80%93+Kopi+(3).png');
INSERT INTO `category` VALUES (2, 'sorpefoll', 'https://unboxaboxv3.s3.amazonaws.com/mobileapp/icon/NoPath+%E2%80%93+Kopi+(4).png');
INSERT INTO `category` VALUES (3, 'sorpefoll_v2', 'https://unboxaboxv3.s3.amazonaws.com/mobileapp/icon/NoPath+%E2%80%93+Kopi+(5).png');
INSERT INTO `category` VALUES (4, 'beer', 'https://unboxaboxv3.s3.amazonaws.com/mobileapp/icon/NoPath.png');
INSERT INTO `category` VALUES (5, 'wine ', 'https://unboxaboxv3.s3.amazonaws.com/mobileapp/icon/NoPath+%E2%80%93+Kopi.png');
INSERT INTO `category` VALUES (6, 'vodka', 'https://unboxaboxv3.s3.amazonaws.com/mobileapp/icon/NoPath+%E2%80%93+Kopi+(2).png');
INSERT INTO `category` VALUES (7, 'add_players_icon', 'https://unboxaboxv3.s3.amazonaws.com/mobileapp/icon/NoPath+%E2%80%93+Kopi+(8).png');
INSERT INTO `category` VALUES (8, 'ARROW', 'https://unboxaboxv3.s3.amazonaws.com/mobileapp/icon/asset1.png');

SET FOREIGN_KEY_CHECKS = 1;
