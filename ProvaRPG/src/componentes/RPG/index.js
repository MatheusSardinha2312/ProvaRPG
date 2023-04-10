import { Button, Image, View, Text} from "react-native";
import styles from './styles';

export default function RPG(props){
    return (
        <View style={styles.cardContainer}>
            <View style={styles.imgV}>
                <Image source={{uri: props.card.imagem}} style={styles.img}/>

            </View>
            <View style={styles.dataV}>
                <Text style={styles.nome}>Nome: {props.card.nome}</Text>
                <Text style={styles.desc}>Descrição: {props.card.desc}</Text>
                <Button style={styles.butt} title="Trocar"/>

            </View>

        </View>
    );
}