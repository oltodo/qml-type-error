import QtQuick 2.12
import 'bundle.js' as Bundle

Rectangle {
    width: 100
    height: 100

    Component.onCompleted: {
      Bundle.modules.foobar();
    }
}
