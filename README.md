# README
This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


# chatspace db設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false, unique: true, index: true|
|name|string|null: false, unique: :true, index: true|
### Association
- has_many :messages
- has_many :groups, through: :users_groups  
- 

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group|references|null: false, foreign_key: true|
|user|string|null: false|
### Association
- belongs_to:group
- belongs_to:user

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :messages
- has_many :users , through: :users_groups
- has_many :users_groups

### messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|---------|
|image|string|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

