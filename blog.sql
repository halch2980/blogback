-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Авг 07 2018 г., 11:39
-- Версия сервера: 10.1.34-MariaDB-1~xenial
-- Версия PHP: 7.0.30-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `blog`
--

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `id` int(11) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `title`, `created_at`, `updated_at`) VALUES
(9, 'category', '2018-07-24 10:07:48', '2018-07-24 10:07:48');

-- --------------------------------------------------------

--
-- Структура таблицы `comments`
--

CREATE TABLE `comments` (
  `id` int(11) UNSIGNED NOT NULL,
  `comment` varchar(255) NOT NULL,
  `user_id` int(11) UNSIGNED NOT NULL,
  `post_id` int(11) UNSIGNED NOT NULL,
  `parent_id` int(11) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `files`
--

CREATE TABLE `files` (
  `id` int(11) UNSIGNED NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `file_path` varchar(255) NOT NULL,
  `type` tinyint(1) NOT NULL,
  `post_id` int(11) UNSIGNED DEFAULT NULL,
  `comment_id` int(11) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `files`
--

INSERT INTO `files` (`id`, `file_name`, `file_path`, `type`, `post_id`, `comment_id`, `created_at`, `updated_at`) VALUES
(3, '0799aaad4bad0ce1898998d203cfecdd', 'public/images/0799aaad4bad0ce1898998d203cfecdd', 0, 15, NULL, '2018-08-01 11:38:56', '2018-08-01 11:38:56'),
(5, 'c2863b0b2da61e798b7f829f2736bf59', 'public/images/c2863b0b2da61e798b7f829f2736bf59', 1, 16, NULL, '2018-08-01 12:06:33', '2018-08-01 12:06:33'),
(6, '456a2bf30e11851c58f5cf1b1f7c751d', 'public/images/456a2bf30e11851c58f5cf1b1f7c751d', 0, 16, NULL, '2018-08-01 12:06:33', '2018-08-01 12:06:33'),
(7, 'b81bd7463f583fdde63121783791d009', 'public/images/b81bd7463f583fdde63121783791d009', 0, 16, NULL, '2018-08-01 12:06:33', '2018-08-01 12:06:33'),
(8, '63da1c9cee23895900247c37423cd854', 'public/images/63da1c9cee23895900247c37423cd854', 0, 16, NULL, '2018-08-01 12:14:52', '2018-08-01 12:14:52'),
(9, 'a40bc600ab5e80eaccee9b80ff3ae0a5', 'public/images/a40bc600ab5e80eaccee9b80ff3ae0a5', 0, 16, NULL, '2018-08-01 12:14:52', '2018-08-01 12:14:52'),
(10, 'ba930c31cd993c6d642501f586f60631', 'public/images/ba930c31cd993c6d642501f586f60631', 0, 16, NULL, '2018-08-01 12:14:52', '2018-08-01 12:14:52'),
(11, 'f34a31b78ec89532abdd4c2e36997ba5', 'public/images/f34a31b78ec89532abdd4c2e36997ba5', 0, 16, NULL, '2018-08-01 12:46:49', '2018-08-01 12:46:49'),
(12, '452e8317a4967221fd0e5ced97ecf97f', 'public/images/452e8317a4967221fd0e5ced97ecf97f', 1, 17, NULL, '2018-08-01 12:47:48', '2018-08-01 12:47:48'),
(13, 'd1e931781a886513548f2f13f09bdf11', 'public/images/d1e931781a886513548f2f13f09bdf11', 0, 17, NULL, '2018-08-01 12:47:48', '2018-08-01 12:47:48'),
(14, 'a0ce008de731d4328a7f87ad197ec01c', 'public/images/a0ce008de731d4328a7f87ad197ec01c', 0, 17, NULL, '2018-08-01 12:47:48', '2018-08-01 12:47:48'),
(15, '53876ec69d247603cdb2e2b68151de3d', 'public/images/53876ec69d247603cdb2e2b68151de3d', 0, 17, NULL, '2018-08-01 12:47:53', '2018-08-01 12:47:53'),
(16, '4610f6ad72c5efd4cd6165b65f62be37', 'public/images/4610f6ad72c5efd4cd6165b65f62be37', 0, 17, NULL, '2018-08-01 12:47:53', '2018-08-01 12:47:53'),
(17, 'b11e9baf1165b19be13a1f83c2cd4743', 'public/images/b11e9baf1165b19be13a1f83c2cd4743', 0, 17, NULL, '2018-08-01 12:47:53', '2018-08-01 12:47:53'),
(18, 'a78c98c9ee845950a96d11a6bb35af68', 'public/images/a78c98c9ee845950a96d11a6bb35af68', 0, 17, NULL, '2018-08-01 12:47:53', '2018-08-01 12:47:53'),
(19, 'a639f9e8f745ca39021ca3ccc4729816', 'public/images/a639f9e8f745ca39021ca3ccc4729816', 1, 18, NULL, '2018-08-01 12:51:08', '2018-08-01 12:51:08'),
(20, '2e1627e9b59105b677c217a3991feb4b', 'public/images/2e1627e9b59105b677c217a3991feb4b', 0, 18, NULL, '2018-08-01 12:51:08', '2018-08-01 12:51:08'),
(21, 'f7934215de37cba83d8e9fe3081c2fa8', 'public/images/f7934215de37cba83d8e9fe3081c2fa8', 0, 18, NULL, '2018-08-01 12:51:08', '2018-08-01 12:51:08'),
(22, 'd6b8405c76735ef53ecbd064191f8583', 'public/images/d6b8405c76735ef53ecbd064191f8583', 0, 18, NULL, '2018-08-01 12:51:15', '2018-08-01 12:51:15'),
(23, '2f51c0874e8d99af2e0510c948ea49ff', 'public/images/2f51c0874e8d99af2e0510c948ea49ff', 0, 18, NULL, '2018-08-01 12:51:15', '2018-08-01 12:51:15'),
(24, 'e36498d51c281fdf64ce87608ae5be65', 'public/images/e36498d51c281fdf64ce87608ae5be65', 0, 18, NULL, '2018-08-01 12:51:15', '2018-08-01 12:51:15'),
(25, 'aa80833c951ace55eab1d261bbcb4d06', 'public/images/aa80833c951ace55eab1d261bbcb4d06', 0, 18, NULL, '2018-08-01 12:51:15', '2018-08-01 12:51:15'),
(30, '5a97d03eeb758715be178435745d7010', 'public/images/5a97d03eeb758715be178435745d7010', 0, 19, NULL, '2018-08-01 12:52:54', '2018-08-01 12:52:54'),
(31, '0050e8e49ab76972f14e1bd43f38f742', 'public/images/0050e8e49ab76972f14e1bd43f38f742', 0, 19, NULL, '2018-08-01 12:52:54', '2018-08-01 12:52:54'),
(32, '81ad780e30b524ad6f71409bcda76429', 'public/images/81ad780e30b524ad6f71409bcda76429', 0, 19, NULL, '2018-08-01 12:52:54', '2018-08-01 12:52:54'),
(39, 'aa9aff518e1fbb20a8792a27677dab27', 'public/images/aa9aff518e1fbb20a8792a27677dab27', 0, 20, NULL, '2018-08-01 12:53:51', '2018-08-01 12:53:51');

-- --------------------------------------------------------

--
-- Структура таблицы `posts`
--

CREATE TABLE `posts` (
  `id` int(11) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `desc` text NOT NULL,
  `img` varchar(255) NOT NULL,
  `user_id` int(11) UNSIGNED NOT NULL,
  `cat_id` int(11) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `posts`
--

INSERT INTO `posts` (`id`, `title`, `desc`, `img`, `user_id`, `cat_id`, `created_at`, `updated_at`) VALUES
(1, 'title', 'desc', '', 37, 9, '2018-07-30 07:07:45', '0000-00-00 00:00:00'),
(2, 'title', 'desc', '', 37, 9, '2018-07-30 07:09:30', '0000-00-00 00:00:00'),
(3, 'title', 'desc', '', 37, 9, '2018-07-30 07:10:07', '0000-00-00 00:00:00'),
(4, 'title', 'desc', '', 37, 9, '2018-07-30 07:10:38', '0000-00-00 00:00:00'),
(5, 'title', 'desc', '', 37, 9, '2018-07-30 07:11:51', '0000-00-00 00:00:00'),
(6, 'title', 'desc', '', 37, 9, '2018-07-30 07:15:04', '0000-00-00 00:00:00'),
(7, 'title', 'desc', '', 37, 9, '2018-07-30 07:15:26', '0000-00-00 00:00:00'),
(8, 'title', 'desc', '', 37, 9, '2018-07-30 07:15:36', '0000-00-00 00:00:00'),
(9, 'title', 'desc', '', 37, 9, '2018-07-30 07:15:50', '0000-00-00 00:00:00'),
(10, 'title', 'desc', '', 37, 9, '2018-07-30 10:18:21', '0000-00-00 00:00:00'),
(11, 'title', 'desc', '', 37, 9, '2018-07-30 10:20:31', '0000-00-00 00:00:00'),
(12, 'title122', 'desc123', '', 37, 9, '2018-07-30 13:43:23', '2018-07-30 13:43:23'),
(13, 'title', 'desc1', '', 37, 9, '2018-07-31 10:19:25', '0000-00-00 00:00:00'),
(15, 'title', 'desc', '', 37, 9, '2018-08-01 11:38:56', '0000-00-00 00:00:00'),
(16, 'title', 'desc', '', 37, 9, '2018-08-01 12:06:33', '0000-00-00 00:00:00'),
(17, 'title', 'desc', '', 37, 9, '2018-08-01 12:47:48', '0000-00-00 00:00:00'),
(18, 'title', 'desc', '', 37, 9, '2018-08-01 12:51:08', '0000-00-00 00:00:00'),
(19, 'title', 'desc', '', 37, 9, '2018-08-01 12:52:49', '0000-00-00 00:00:00'),
(20, 'title', 'desc', '', 37, 9, '2018-08-01 12:53:39', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `admin`, `created_at`, `updated_at`) VALUES
(37, 'halch@gmail.com', '$2b$10$5Pow7oRVT.9f0c3qF8ww8OUR8GTlYGGu.vM1BshCmq9.xNeAtMC1G', 'Halch', 1, '2018-07-24 10:07:03', '2018-07-31 11:46:44');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `title` (`title`),
  ADD UNIQUE KEY `title_2` (`title`);

--
-- Индексы таблицы `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `parent_id` (`parent_id`);

--
-- Индексы таблицы `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `comment_id` (`comment_id`);

--
-- Индексы таблицы `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `cat_id` (`cat_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT для таблицы `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
--
-- AUTO_INCREMENT для таблицы `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_ibfk_3` FOREIGN KEY (`parent_id`) REFERENCES `comments` (`id`);

--
-- Ограничения внешнего ключа таблицы `files`
--
ALTER TABLE `files`
  ADD CONSTRAINT `files_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `files_ibfk_2` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
