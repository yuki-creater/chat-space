class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores do |t|
      t.string :name
      t.integer :score
      t.references :user, foreign_key: true #scoresテーブルのレコードはuser_idという外部キーのカラムを持ち、どのユーザーの得点なのかがわかるようにしている
      t.timestamps
    end
  end
end
