import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';  // File generato automaticamente (vedi sotto)

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  try {
    await Firebase.initializeApp(
      options: DefaultFirebaseOptions.currentPlatform,  // Configurazione multi-piattaforma
    );
    runApp(MyApp());
  } catch (e) {
    runApp(
      MaterialApp(
        home: Scaffold(
          body: Center(child: Text("Errore durante l'avvio: $e")),
        ),
      ),
    );
  }
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'FitApp',
      debugShowCheckedModeBanner: false,
      home: LoginPage(),  // Pagina iniziale
    );
  }
}