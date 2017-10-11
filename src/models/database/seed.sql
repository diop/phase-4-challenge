INSERT INTO
  albums (title, artist)
VALUES
  ('Malibu', 'Anderson .Paak'),
  ('A Seat at the Table', 'Solange Knowles'),
  ('Melodrama', 'Lorde'),
  ('In Rainbows', 'Radiohead')
;

INSERT INTO
  users (name, email, password)
VALUES
  ('Fodé Diop', 'fode@blockchaindevelopers.io', 'changeme'),
  ('Devon Wesley', 'dev@blockchaindevelopers.io', 'changeme'),
  ('Zubair Ahmed', 'zubair@blockchaindevelopers.io', 'changeme'),
  ('Rachel Ralston', 'rachel@blockchaindevelopers.io', 'changeme'),
  ('Brandon Gilchrist', 'brandon@blockchaindevelopers.io', 'changeme')
;

INSERT INTO
  reviews (content, user_id, album_id)
VALUES
  ('Best album of the year', 2, 3),
  ('Amazing vocals. On repeat!', 1, 2),
  ('Wasted my money. I might need a refund?', 3, 1),
  ('Hot gargabe', 4, 3)
;
