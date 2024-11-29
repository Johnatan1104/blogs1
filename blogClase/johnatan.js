let express=require('express');
const blogRoutes=require('./routes/blogRoutes');
app = express();
const PORT = 2020;
app.use(express.json());

app.use('/api', blogRoutes);

app.listen(PORT, () => {
    console.log('servidor corriendo',PORT);
});