--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.5
-- Dumped by pg_dump version 9.6.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: poses; Type: TABLE; Schema: public; Owner: yyyar
--

CREATE TABLE poses (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    type character varying(255) NOT NULL,
    difficulty character varying(255) NOT NULL,
    number_of_people character varying(255) NOT NULL,
    img character varying(255) NOT NULL
);


ALTER TABLE poses OWNER TO yyyar;

--
-- Name: poses_id_seq; Type: SEQUENCE; Schema: public; Owner: yyyar
--

CREATE SEQUENCE poses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE poses_id_seq OWNER TO yyyar;

--
-- Name: poses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yyyar
--

ALTER SEQUENCE poses_id_seq OWNED BY poses.id;


--
-- Name: user2pose; Type: TABLE; Schema: public; Owner: yyyar
--

CREATE TABLE user2pose (
    user_id integer NOT NULL,
    pose_id integer NOT NULL,
    list_name character varying(255) NOT NULL
);


ALTER TABLE user2pose OWNER TO yyyar;

--
-- Name: users; Type: TABLE; Schema: public; Owner: yyyar
--

CREATE TABLE users (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password_digest text NOT NULL,
    difficulty character varying(255) NOT NULL
);


ALTER TABLE users OWNER TO yyyar;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: yyyar
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_id_seq OWNER TO yyyar;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yyyar
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: poses id; Type: DEFAULT; Schema: public; Owner: yyyar
--

ALTER TABLE ONLY poses ALTER COLUMN id SET DEFAULT nextval('poses_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: yyyar
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Data for Name: poses; Type: TABLE DATA; Schema: public; Owner: yyyar
--

COPY poses (id, name, type, difficulty, number_of_people, img) FROM stdin;
11	Mono Foot to Foot	L-Base	Really Hard	2 Person	https://www.acropedia.org/wp-content/uploads/2016/07/├É┬ó├É┬╛├É┬╗├É┬╕├É┬║.jpg
2	Double Throne	L-Base	Intermediate	3 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930721/n4kcglq3mvirt7omznai.jpg
3	Side Back Bird	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930774/pzumplv87idlmr6eldvf.jpg
4	Double Couch	L-Base	Hard	3 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930882/yvz3ptprvtrkm8sskqip.jpg
33	Asymmetrical on Foot	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/ub4mnzomfmsdirsfmx4r.jpg
22	Back Bow	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/lya2pczccknrxy3h792a.jpg
26	Care Bear Stare	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/b0ggskkastc7y4cw9pcm.jpg
25	Reverse Vishnu├óΓé¼Γäós Couch	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/q6gs4mkvfrvplzig5liq.jpg
13	Reverse Needle	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/cnfgvaagepqvrgtqsv7o.jpg
24	Back Plank	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/e6nmf08gje6yow80ynho.jpg
18	Bicep Stand	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/ywwlkgeq5e66onektblu.jpg
19	Reverse Space Needle	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/srhekp4zaijhdut4dn55.jpg
7	The Archer	L-Base	Intermediate	3 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/d1abkqsofg7mzi5uak9t.jpg
30	Lotus Pile	L-Base	Intermediate	3 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/mkes48dkjtg9cavpw1vq.jpg
31	Reverse Low Foot-To-Hand	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/q5pt04yxcqhg0wmg9wvr.jpg
20	Heart to Knees	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/fixnnton8pyizafxiizj.jpg
9	The Buddha	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/yhxv2jjzq0fmeruavdpu.jpg
5	Tree Pose on Shin	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/xv1mut48h1myvusupcel.jpg
14	Bowsprit	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/p6mjocgjy9fqqqeokdtz.jpg
29	Thinker	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/f24wvwjo20digsjqxlid.jpg
17	Vishnu├óΓé¼Γäós Hook	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/lyawzuqmhfcq4j19mbnu.jpg
23	Satellite	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/aonxmdceunhmfmxlqf0a.jpg
27	Bird	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/tlv6f0mit5tzkaxjoe9z.jpg
39	Leaf Stretch	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931146/oqfso8tcupdxxzsoskdh.jpg
28	Needle	L-Base	Expert	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/pcqhybfe6rirsuau0yac.jpg
44	Birds Dive	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/ryrlsrgzp2plgpdk1xrx.jpg
40	Chest stand	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/levgjk3kp3sacbq7td2u.jpg
47	Shin to Foot	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/ilbqprjr292udg2zhxcn.jpg
36	Scorpions Kiss	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/cz4l0t04mumppjww9smd.jpg
42	Hanging Bat	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/ngk7bps7ukceik6chvpx.jpg
16	Goofy Goofy Foot to Foot	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/b4vvtelxv6lp41dykjcw.jpg
37	Sticky Lab	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/vicowjb7fg5rrwolz0dy.jpg
38	Ostrich Lab	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/dieeoigo6fyfjbxbiiuv.jpg
12	Low Reverse Hand to Hand	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/zqebuxazimonwgr4fqzn.jpg
32	Reverse Foot-To-Foot	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/nudyqirhcrtxkkzzorlx.jpg
46	Double Stag Counter Balance	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/lk2ha6f7iypcdbgnsivd.jpg
43	Bird on Hands	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/a1syaticwq5p23iql7v7.jpg
35	Calatrava	L-Base	Intermediate	3 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/imnix0bbpua5hj67jkao.jpg
15	Foot-To-Foot Headstand	L-Base	Really Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/kes9gnn96cliqwkcax0u.jpg
49	Foot Sirsasana	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/lduqspfyz39ed3lkbdy4.jpg
45	Dragonfly	L-Base	Really Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/rjrpvx0knpj02dx8el1w.jpg
50	High Spoon	L-Base	Intermediate	3 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/rtn19ewnhsfa9mijgm81.jpg
48	Double-Base Hand to Hand	L-Base	Expert	3 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/iwi2pig3ccdfax7n6jp1.jpg
51	Pike Pyramid	L-Base	Intermediate	3 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/oasukark85hxbegj2j2e.jpg
41	High Foot-to-Hand	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/mhrhxau0yfsdqhlteukd.jpg
21	Baby Hand to Hand	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/bsy0kh2xyn7cx7s0puk9.jpg
8	Star	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/irbzdcgw5nho4gjgxguk.jpg
52	Hand-to-Hand	L-Base	Really Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/h6xqdlnlh0sg6et0rniw.jpg
56	Bluejay	L-Base	Hard	4 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/ay0a4w3qpgvifairnaw1.jpg
54	Foot-To-Foot Lord of the Dance Pose	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/fhopniaggqbeuyvbghpk.jpg
53	Double Knee Drop	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/nda5bwrt9hjiebhnfkyc.jpg
80	Reverse Tuck Sit	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/hwlsqi0fz64bmjmr8ms8.jpg
69	Pasarita Twist	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/vpcknhuufqdo4rqbtoke.jpg
63	Table Top	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/caot8yxb6ojif1w0tfwf.jpg
84	Throne	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/k0c1f2rpy4eqdwwtqdxu.jpg
81	Bound Twist	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/mwekxh45qkvtgcqfgxk7.jpg
66	Heart to Hands	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/npfueqh4xjjyvu4a0byx.jpg
79	Reverse Couch	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/fxlj4vsxmdiddfzhvuqp.jpg
57	Maple	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/j0q5qr03ya2htqngaeez.jpg
67	Spoon	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/pjfywo4zkq0x5lxfct83.jpg
73	Super Natural	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/qpdtkurulpx8jximosiy.jpg
61	Scare Crow	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/fpvhdgfwku6tqwgblhkw.jpg
82	Reverse Throne	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/ubhx4so09ce1cowrqv5z.jpg
76	Reverse Bat	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/pjldnib3kklbcqvknpow.jpg
65	Folded Leaf	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/x1r2yzomus8xlw9zc3dr.jpg
78	Heart to Shin	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/tsaxbbfrhewybv0iiqos.jpg
64	Hammock	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/vmtpeuf88okl4dboy56m.jpg
59	Headfirst Grasshopper	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/pxj8wqzdprszehyipzwj.jpg
71	Super Yogi	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/l3zjpamyu6bq5kytz58r.jpg
77	Tuck Sit	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/ncsagbtxquubjjyzswoh.jpg
83	Whaka Stretch	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/b8ljr0ad1g6zeqwautr9.jpg
68	Hangle Dangle	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/nlzkjx5wjjbqteittm5w.jpg
75	Bat	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/ucbqwktroik7nzk2z11v.jpg
95	Vishnu├óΓé¼Γäós Couch	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/ooth2kclmk2gsldupm9u.jpg
60	Low Foot-to-Hand	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/xcfuttxt2zmimvcahren.jpg
58	Mono-Limb Reverse Star	L-Base	Really Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/cmqazd80sl56mfvfk5ie.jpg
90	Bow	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/lqfcbyb1fdvqflt7ix7n.jpg
70	Floating Camel	L-Base	Really Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/nxb9m961c6vawenl5jc8.jpg
62	Boredstand	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/nwopffou6upu9ltzzyzx.jpg
72	Navasana	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/uogmaghrmjf1otesysnu.jpg
74	Super Yogi Twist	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931173/evqbk3qbi2aplc6ja7si.jpg
86	Floating Pashi	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931179/nms0tq6nd4olkgiuopxv.jpg
91	Reverse Back Plank	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931179/yhstwxikcewhdbfrfal8.jpg
93	Whale	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931179/z7lh8dgwvzr9paywvsjn.jpg
97	Reverse Shoulder Stand	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931179/yy0jxkop32bb8rpazhji.jpg
87	Mermaid	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931179/dlgibmvbqzni1vysk1nw.jpg
98	Reverse Tittibhasana	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931179/oedmxu5e0prxhkvt80gp.jpg
92	Reverse Prayer	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931179/s0l0cfqupl6yaoobwezb.jpg
85	Side Star	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931179/wzr03gblkrem5sv2etwh.jpg
88	Little Mermaid	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931179/wbwb44ddfhi1vwj7k2xd.jpg
99	Nataraj	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931179/wee6ri4bmggtrrdkbirr.jpg
94	Low hand-to-hand	L-Base	Really Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931179/bxdclsg7nfj0jiz3rfhv.jpg
96	Straddle Bat	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931179/ggcdmmsnybzqjrzqvux3.jpg
89	Croc	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931179/wmzma2gcnsrjxvj91g3x.jpg
1	Moon Bridge	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930644/hppvektgoqbgiirnowvu.jpg
10	Teeter Totter	L-Base	Really Hard	3 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/wasjmnyeqoh64mc30gnp.jpg
6	Levered Hand to Hand Trio	L-Base	Really Hard	3 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514930940/fnny3uvocxegyqlapobk.jpg
55	Leaf Twist	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/heofg1oh1mpvdtseki1b.jpg
34	Goofy Chair	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931170/i1kwdxqgwjbyhhhy3ofi.jpg
102	Front Plank	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931179/uekk3ruuqgebsrmdhdi5.jpg
100	Foot-to-Foot	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931179/dhlehfofhpytfmkjcg5d.jpg
103	Reverse Star	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931179/zv62ndvhrwd48srjetgt.jpg
105	Couch	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931179/yxxrtwyaa3oul9pemtqb.jpg
106	Free Shoulder Stand	L-Base	Intermediate	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931179/jss8ycnh9g0i9idjpnqu.jpg
101	Tittibhasana	L-Base	Hard	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931179/lgemjrmquwv2dwmog1ng.jpg
104	Back Bird	L-Base	Easy	2 Person	https://res.cloudinary.com/dz2nxhscn/image/upload/v1514931179/n6bcjlnnj3drcrfwznnx.jpg
\.


--
-- Name: poses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yyyar
--

SELECT pg_catalog.setval('poses_id_seq', 106, true);


--
-- Data for Name: user2pose; Type: TABLE DATA; Schema: public; Owner: yyyar
--

COPY user2pose (user_id, pose_id, list_name) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: yyyar
--

COPY users (id, name, email, password_digest, difficulty) FROM stdin;
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yyyar
--

SELECT pg_catalog.setval('users_id_seq', 1, false);


--
-- Name: poses poses_name_key; Type: CONSTRAINT; Schema: public; Owner: yyyar
--

ALTER TABLE ONLY poses
    ADD CONSTRAINT poses_name_key UNIQUE (name);


--
-- Name: poses poses_pkey; Type: CONSTRAINT; Schema: public; Owner: yyyar
--

ALTER TABLE ONLY poses
    ADD CONSTRAINT poses_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: yyyar
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_name_key; Type: CONSTRAINT; Schema: public; Owner: yyyar
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_name_key UNIQUE (name);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: yyyar
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

