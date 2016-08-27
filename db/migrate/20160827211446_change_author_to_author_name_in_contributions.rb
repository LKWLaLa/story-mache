class ChangeAuthorToAuthorNameInContributions < ActiveRecord::Migration
  def change
    rename_column :contributions, :author, :author_name
  end
end
